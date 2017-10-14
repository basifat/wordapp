from rest_framework import permissions, viewsets
from rest_framework.response import Response

from contents.models import Content
from contents.api.permissions import IsAuthorOfContent
from contents.api.serializers import ContentSerializer


class ContentViewSet(viewsets.ModelViewSet):
    queryset = Content.objects.order_by('-author')
    #queryset = Content.objects.order_by('-id')
    serializer_class = ContentSerializer

    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return (permissions.AllowAny(),)
            #return (permissions.IsAuthenticated(),)
        return (permissions.IsAuthenticated(), IsAuthorOfContent(),)

    def perform_create(self, serializer):
        instance = serializer.save(author=self.request.user)
        # instance = serializer.save(id=self.request.user.id)

        return super(ContentViewSet, self).perform_create(serializer)



class AccountContentViewSet(viewsets.ViewSet):
    queryset = Content.objects.select_related('author').all()
    #queryset = Content.objects.select_related('id').all()
    serializer_class = ContentSerializer

    def list(self, request, account_username=None):
        queryset = self.queryset.filter(author__username=account_username)
        serializer = self.serializer_class(queryset, many=True)

        return Response(serializer.data)