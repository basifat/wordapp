from django.db import models

class Info(models.Model):
    #url = models.CharField(max_length = 200, default = 'www.google.com')
    keywords = models.TextField()
    comments = models.TextField()
    #word_count = models.IntegerField(default = 1000)
    #quantity = models.IntegerField(default = 1)
    #revisions = models.IntegerField(default=0)
    price = models.IntegerField(default = 10)
    offer_1 = 'SUFFICIENT'
    offer_2 = 'EXTENDED'
    offer_3 = 'ELABORATE'
    OFFER_CHOICES =  (
                    (offer_1, 'sufficient'),
                    (offer_2, 'extended'),
                    (offer_3, 'elaborate'),
                    )
    offer_option = models.CharField(
                    max_length = 20,
                    choices = OFFER_CHOICES,
                    default = offer_1,
                    )

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


    def save(self, *args, **kwargs):
        if self.offer_option == self.offer_1:
            self.price = 25

        if self.offer_option == self.offer_2:
            self.price = 75
        
        if self.offer_option == self.offer_3:
            self.price = 125

        super(Info, self).save(*args, **kwargs)

    
        


