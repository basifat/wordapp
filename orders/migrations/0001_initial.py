# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0001_initial'),
        ('infos', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('total', models.IntegerField(default=10)),
                ('date', models.TimeField(auto_now=True)),
                ('expire', models.TimeField(auto_now=True)),
                ('paid', models.BooleanField(default=False)),
                ('buyer', models.ForeignKey(related_name='buyer', to='authentication.Account')),
                ('info', models.ForeignKey(to='infos.Info')),
                ('writer', models.ForeignKey(related_name='writer', default=1, to='authentication.Account')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Transaction',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('transaction_id', models.CharField(max_length=120)),
                ('order_id', models.CharField(max_length=120)),
                ('amount', models.DecimalField(max_digits=100, decimal_places=2)),
                ('success', models.BooleanField(default=True)),
                ('transaction_status', models.CharField(max_length=220, null=True, blank=True)),
                ('card_type', models.CharField(max_length=120)),
                ('last_four', models.PositiveIntegerField(null=True, blank=True)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('buyer', models.ForeignKey(related_name='transaction_buyer', to='authentication.Account')),
            ],
            options={
                'ordering': ['-timestamp'],
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='UserMerchantId',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('customer_id', models.CharField(max_length=120)),
                ('merchant_name', models.CharField(default=b'Braintree', max_length=120)),
                ('buyer', models.ForeignKey(related_name='merchant_buyer', to='authentication.Account')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
