from django.db import models

class Platos(models.Model):
    titulo = models.CharField(max_length=100)
    descripcion = models.CharField(max_length=250)
    imagen = models.ImageField(upload_to='platos', null="True")  # Valor predeterminado temporal
    precio = models.FloatField(default=0.0)  # Valor predeterminado temporal


    def __str__(self):
        return self.titulo