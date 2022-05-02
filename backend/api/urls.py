from django.urls import path
from api.views import GetPriceBySegment
urlpatterns = [
    path('', GetPriceBySegment.as_view())
]