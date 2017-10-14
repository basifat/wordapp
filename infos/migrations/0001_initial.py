# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Info',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('keywords', models.TextField()),
                ('comments', models.TextField()),
                ('price', models.IntegerField(default=10)),
                ('offer_option', models.CharField(default=b'SUFFICIENT', max_length=20, choices=[(b'SUFFICIENT', b'sufficient'), (b'EXTENDED', b'extended'), (b'ELABORATE', b'elaborate')])),
                ('order_status', models.CharField(default=b'PROCESSING', max_length=10, choices=[(b'PROCESSING', b'In Process'), (b'PROCESSED', b'Processed')])),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
