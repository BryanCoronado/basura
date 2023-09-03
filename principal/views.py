from rest_framework import viewsets
from .serializer import PlatosSerializer
from .models import Platos



class PlatosView(viewsets.ModelViewSet):
    serializer_class= PlatosSerializer
    queryset = Platos.objects.all()
    


