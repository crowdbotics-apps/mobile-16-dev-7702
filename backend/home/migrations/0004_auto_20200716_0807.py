# Generated by Django 2.2.14 on 2020-07-16 08:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0003_customtext_hgfhgfhgfhg"),
    ]

    operations = [
        migrations.CreateModel(
            name="Thfjhfk",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("fghedyjhetyje", models.BigIntegerField()),
            ],
        ),
        migrations.RemoveField(model_name="customtext", name="hgfhgfhgfhg",),
    ]
