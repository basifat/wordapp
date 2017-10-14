from rest_framework import serializers

from authentication.api.serializers import AccountSerializer
#from infos.api.serializers import InfoSerializer
from orders.models import Order
from infos.api.serializers import InfoSerializer
from infos.models import Info
from authentication.models import Account

class OrderSerializer(serializers.ModelSerializer):
	buyer = AccountSerializer(read_only=True, required=False)
	info = InfoSerializer(read_only=False, required=True)

	class Meta:
		model = Order

		fields = ('id', 'buyer', 'writer', 'info', 'date', 'expire', 'total', 'paid')
		read_only_fields = ('writer', 'buyer','total')

	def get_validation_exclusions(self):
		exclusions = super(OrderSerializer, self).get_validation_exclusions()
		return exclusions + ['buyer', 'writer']

	def create(self, validated_data):
		info_data = validated_data.pop('info')
		info = Info.objects.create(**info_data)
		order = Order.objects.create(info=info, **validated_data)
	
		return order

	# def update(self, instance, validated_data):
	# 	# Update the  instance
	# 	instance.total = validated_data['total']
	# 	for info in validated_data.keys():
	# 		#instance.total = validated_data['total']
	# 		validated_data= validated_data[info]
	# 		instance.info.keywords = validated_data['keywords']
	# 		instance.save()
	# 		return instance
	# 	instance.total = validated_data['total']
	# 	instance.save()
	# 	return instance

	def update(self, instance, validated_data):
		# Update the  instance
		#instance.total = validated_data['total']
		for info in validated_data.keys():
			#instance.total = validated_data['total']
			validated_data= validated_data[info]
			instance.info.keywords = validated_data['keywords']
			instance.save()
			return instance
		#instance.total = validated_data['total']
		instance.save()
		return instance

		# # Delete any detail not included in the request
		# owner_ids = [item['owner_id'] for item in validated_data['owners']]
		# for owner in cars.owners.all():
		# if owner.id not in owner_ids:
		#     owner.delete()

		# # Create or update owner 
		# for owner in validated_data['owners']:
		# ownerObj = Owner.objects.get(pk=item['id'])
		# if ownerObje:
		#     ownerObj.some_field=item['some_field']
		#     ....fields...
		# else:
		#    ownerObj = Owner.create(car=instance,**owner)
		# ownerObj.save()

		# return instance


