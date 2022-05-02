from rest_framework.serializers import ModelSerializer
from api.models import ProductPrice

class ProductPriceSerializer(ModelSerializer):
    class Meta:
        model = ProductPrice
        fields = '__all__'