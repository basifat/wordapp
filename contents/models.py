from __future__ import unicode_literals
from django.conf import settings

from django.db import models
from authentication.models import Account
#from orders.models import Order

# Create your models here.


class Content(models.Model):
    author = models.ForeignKey(Account)
    order_keyword = models.CharField(max_length = 200)
    revisions = models.IntegerField(default=0)
    status_1 = 'PROCESSING'
    status_2 = 'PROCESSED'
    STATUS_CHOICES = (
        (status_1, 'In Process'),
        (status_2, 'Processed'),
        )

    order_status = models.CharField(
        max_length = 10,
        choices = STATUS_CHOICES,
        default = status_1,
        )

    # def __str__(self):
    #   return str(self.author)

    # def __unicode__(self):
    #   return str(self.author)

    def __str__(self):
        return str(self.order_keyword)


    def __unicode__(self):
        return str(self.order_keyword)

    #orderId = models.IntegerField() # check later to specify minimum or maximum length of order ID
    #order_keyword = models.CharField(max_length = 200)
    #orderDate = models.TimeField(auto_now=True)
    #revisions = models.IntegerField()

from __future__ import unicode_literals
from django.conf import settings

from django.db import models
from authentication.models import Account
from orders.models import Order

# Create your models here.


class Content(models.Model):
    author = models.ForeignKey(Account)
    order_keyword = models.CharField(max_length = 200)
    revisions = models.IntegerField(default=0)
    status_1 = 'PROCESSING'
    status_2 = 'PROCESSED'
    STATUS_CHOICES = (
        (status_1, 'In Process'),
        (status_2, 'Processed'),
        )

    order_status = models.CharField(
        max_length = 10,
        choices = STATUS_CHOICES,
        default = status_1,
        )

    # def __str__(self):
    #   return str(self.author)

    # def __unicode__(self):
    #   return str(self.author)

    def __str__(self):
        return str(self.order_keyword)


    def __unicode__(self):
        return str(self.order_keyword)

    #orderId = models.IntegerField() # check later to specify minimum or maximum length of order ID
    #order_keyword = models.CharField(max_length = 200)
    #orderDate = models.TimeField(auto_now=True)
    #revisions = models.IntegerField()

