# Generated by Django 5.0.4 on 2024-05-15 11:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_inventory'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='orderitem',
            name='order',
        ),
        migrations.RemoveField(
            model_name='orderitem',
            name='product',
        ),
        migrations.DeleteModel(
            name='Order',
        ),
        migrations.DeleteModel(
            name='OrderItem',
        ),
    ]
