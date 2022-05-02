from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from api.models import ProductPrice
from api.serializers import ProductPriceSerializer
from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page
# Create your views here.

class GetPriceBySegment(APIView):
    @method_decorator(cache_page(60*60* 24*7*12)) ## кэширование на год
    def get(self, request):
        def getSegment(self, prices):
            segmentA = prices[0]
            segmentB = prices[1]
            if (segmentA.get('count') <= segmentB.get('count')):
                return segmentA
            else:
                return segmentB
        prices = ProductPrice.objects.all()
        serializer = ProductPriceSerializer(prices, many=True)
        print(serializer.data)
        if(len(prices) == 0):
            data = [
                {'price': 10},
                {'price': 20}
            ]
            data_serializer = ProductPriceSerializer(data=data, many=True)
            if(data_serializer.is_valid()):
                data_serializer.save()
            print(data_serializer.data)
            instance = getSegment(self, data_serializer.data)
        else:
            print(serializer.data)
            instance = getSegment(self,serializer.data)
        currentSegment = instance
        ProductPrice.objects.filter(id=currentSegment.get('id')).update(count=currentSegment.get('count') + 1)
        return Response(currentSegment.get('price'))
