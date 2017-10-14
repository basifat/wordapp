from rest_framework import serializers

from authentication.api.serializers import AccountSerializer
from contents.models import Content


class ContentSerializer(serializers.ModelSerializer):
	author = AccountSerializer(read_only=True, required=False)
	#id = AccountSerializer(read_only=True, required=False)

	class Meta:
		model = Content

		fields = ('id', 'author', 'order_status', 'revisions')
		read_only_fields = ('id',)

	# def get_validation_exclusions(self, *args, **kwargs):
	# 	exclusions = super(ContentSerializer, self).get_validation_exclusions()
	# 	return exclusions + ['author']
		#return exclusions + ['id']

		def get_validation_exclusions(self):
			exclusions = super(ContentSerializer, self).get_validation_exclusions()
			return exclusions + ['author']