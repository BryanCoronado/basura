from django.urls import path, include
from rest_framework import routers
from principal import views 
from rest_framework.documentation import include_docs_urls

router = routers.DefaultRouter()
router.register(r'principal', views.PlatosView)  # La sintaxis correcta para registrar una vista en el router

urlpatterns = [
    path("api/v1/", include(router.urls)) ,
    path("docs/", include_docs_urls(title= "API DE MI CEVICHERIA"))  
]
