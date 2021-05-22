from django.contrib import admin
from . import models

class MetricInline(admin.TabularInline):
    model = models.Metric
    extra = 0

class PaperAdmin(admin.ModelAdmin):
    inlines = (MetricInline, )

admin.site.register(models.Dataset)
admin.site.register(models.Paper, PaperAdmin)
admin.site.register(models.Metric)
