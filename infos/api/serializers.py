from rest_framework import serializers
from infos.models import Info
from authentication.api.views import AccountSerializer
# from orders.api.serializers import OrderSerializer

class InfoSerializer(serializers.ModelSerializer):

	class Meta:
		model = Info

		# fields = ('id', 'keywords', 'username', 'date', 'word_count', 'quantity', 'price', 'revisions', 'order_status')
		fields = ('id', 'keywords', 'comments', 'price', 'order_status', 'offer_option')
		read_only_fields = ('order_status', 'price')

