from rest_framework import permissions, viewsets
from rest_framework.response import Response

from orders.models import Order
from orders.api.permissions import IsBuyerOfOrder
from orders.api.serializers import OrderSerializer


class OrderViewSet(viewsets.ModelViewSet):
    lookup_field = 'id'
    queryset = Order.objects.order_by('-buyer')
    serializer_class = OrderSerializer

    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return (permissions.AllowAny(),)
        return (permissions.IsAuthenticated(), IsBuyerOfOrder(),)
        # return (permissions.AllowAny(),)

    def perform_create(self, serializer):
        # instance = serializer.save()
        instance = serializer.save(buyer=self.request.user)

        return super(OrderViewSet, self).perform_create(serializer)



class AccountOrderViewSet(viewsets.ViewSet):
    queryset = Order.objects.select_related('buyer').all()
    serializer_class = OrderSerializer

    def list(self, request, account_email=None):
        queryset = self.queryset.filter(buyer__email=account_email)
        serializer = self.serializer_class(queryset, many=True)

        return Response(serializer.data)
