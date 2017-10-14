from django.db import models
import random
from authentication.models import Account
from infos.models import Info

class TransactionManager(models.Manager):
    def create_new(self, buyer, transaction_id, amount, card_type, success=None, transaction_status = None, last_four = None):
        if not buyer :
            raise ValueError("Must be a user")
        if not transaction_id:
            raise ValueError("Must complete a transaction to add new")
        new_order_id = "%s%s%s" %(transaction_id[:2], random.randint(1, 9), transaction_id[2:])
        new_trans = self.model(
            buyer = buyer,
            transaction_id = transaction_id,
            order_id = new_order_id ,
            amount = amount,
            card_type = card_type
            )
        new_trans.save(using=self._db)

        if success is not None:
            new_trans.success = success
            new_trans.transaction_status = transaction_status
        if last_four is not None:
            new_trans.last_four = last_four
        new_trans.save(using=self._db)

        #return new_trans.order_id
        return new_trans

class Transaction(models.Model):
    buyer = models.ForeignKey(Account, related_name= 'transaction_buyer')
    transaction_id = models.CharField(max_length = 120)
    order_id = models.CharField(max_length = 120)
    amount = models.DecimalField(max_digits=100, decimal_places = 2)
    success = models.BooleanField(default=True)
    transaction_status = models.CharField(max_length=220, null=True, blank = True)
    card_type = models.CharField(max_length=120)
    last_four = models.PositiveIntegerField (null = True, blank = True)
    timestamp = models.DateTimeField(auto_now_add = True, auto_now = False)

    objects = TransactionManager()

    def __unicode__(self):
        return self.order_id

    class Meta:
        ordering = ['-timestamp']
# Create your models here.
class UserMerchantId(models.Model):
    buyer = models.ForeignKey(Account, related_name= 'merchant_buyer')
    customer_id = models.CharField(max_length = 120)
    merchant_name = models.CharField(max_length=120, default = "Braintree")

    def __unicode__(self):
        return self.customer_id

    # def save(self, *args, **kwargs):
    #   self.customer_id = self.customer_id
    #   super(UserMerchantId, self).save(*args, **kwargs)

class Order(models.Model):
    buyer = models.ForeignKey(Account, related_name= 'buyer')
    info = models.ForeignKey(Info)
    writer = models.ForeignKey(Account, related_name= 'writer', default = 1) #staff user
    total = models.IntegerField(default = 10) # just so we can save it for now, without modifying the update serializer 16.2.
    date = models.TimeField(auto_now=True)
    expire = models.TimeField(auto_now=True)
    paid = models.BooleanField(default=False)

    def save(self, *args, **kwargs):
        self.total = self.info.price
        super(Order, self).save(*args, **kwargs)


    def __unicode__(self):
        return str(self.total)



