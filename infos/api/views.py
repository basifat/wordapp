from rest_framework import permissions, viewsets
from rest_framework.response import Response

from infos.models import Info
from infos.api.serializers import InfoSerializer
from orders.api.permissions import IsBuyerOfOrder

class InfoViewSet(viewsets.ModelViewSet):
	lookup_field = 'id'
	queryset = Info.objects.order_by('-price')
	serializer_class = InfoSerializer

	def get_permissions(self):
		if self.request.method in permissions.SAFE_METHODS:
		    return (permissions.AllowAny(),)
		return (permissions.IsAuthenticated(), )

    # def perform_create(self, serializer):
    #     #instance = serializer.save(buyer=self.request.user)

    #     return super(InfoViewSet, self).perform_create(serializer)