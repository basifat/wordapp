from rest_framework import permissions, viewsets

from authentication.models import Account
from authentication.api.permissions import IsAccountOwner
from authentication.api.serializers import AccountSerializer

import json

from django.contrib.auth import authenticate, login

from rest_framework import status, views
from rest_framework.response import Response

from django.contrib.auth import logout

from rest_framework import permissions

from django.core.context_processors import csrf
from django.views.decorators.csrf import ensure_csrf_cookie

#from django.views.decorators.csrf import ensure_csrf_token


class AccountViewSet(viewsets.ModelViewSet):
    lookup_field = 'email'
    queryset = Account.objects.all()
    serializer_class = AccountSerializer

    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return (permissions.AllowAny(),)

        if self.request.method == 'POST':
            return (permissions.AllowAny(),)

        return (permissions.IsAuthenticated(), IsAccountOwner(),)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            Account.objects.create_user(**serializer.validated_data)

            return Response(serializer.validated_data, status=status.HTTP_201_CREATED)

        return Response({
            'status': 'Bad request',
            'message': 'Account could not be created with received data.'
        }, status=status.HTTP_400_BAD_REQUEST)


    # def update(self, request):

    #     serializer = self.serializer_class(data=request.data)
    #     print request.data

    #     if serializer.is_valid():
    #             email = serializer.validated_data.get('email')
    #             password = serializer.validated_data.get('password', None)
    #             instance = Account.objects.get(email=email)
    #             instance.set_password(password)
    #             instance.save()
    #             # #confirm_password = validated_data.get('confirm_password', None)

    #             # #if password and confirm_password and password == confirm_password:
    #             #     # instance.set_password(password)
    #             #     # instance.save()

    #             # instance.set_password(password)
    #             # instance.save()
    #             update_session_auth_hash(self.context.get('request'), instance)
    #             return Response(serializer.validated_data, status=status.HTTP_201_CREATED)
    #     return Response({
    #         'status': 'Bad request',
    #         'message': 'Account could not be created with received data.'
    #     }, status=status.HTTP_400_BAD_REQUEST)



class LoginView(views.APIView):
    def post(self, request, format=None):
        data = json.loads(request.body)

        email = data.get('email', None)
        password = data.get('password', None)

        account = authenticate(email=email, password=password)

        if account is not None:
            if account.is_active:
                login(request, account)

                serialized = AccountSerializer(account)

                return Response(serialized.data)
            else:
                return Response({
                    'status': 'Unauthorized',
                    'message': 'This account has been disabled.'
                }, status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response({
                'status': 'Unauthorized',
                'message': 'Username/password combination invalid.'
            }, status=status.HTTP_401_UNAUTHORIZED)



class LogoutView(views.APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, format=None):
        logout(request)

        return Response({}, status=status.HTTP_204_NO_CONTENT)