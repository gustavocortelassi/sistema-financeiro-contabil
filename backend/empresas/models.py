from django.db import models
from django.contrib.auth.models import User

class Empresa(models.Model):

    nome_razao_social = models.CharField(max_length=255, verbose_name="Nome / Razão Social")
    cpf_cnpj = models.CharField(max_length=18, unique=True, verbose_name="CPF/CNPJ")

    ativa = models.BooleanField(default=True) 

    # Campo crucial para o multi-tenant: 
    # Define quais usuários podem ver/acessar esta empresa.
    # Isso será usado na PROJ-10 (filtrar por usuário).
    usuarios = models.ManyToManyField(User, related_name="empresas_acessiveis")

    def __str__(self):
        return self.nome_razao_social

    class Meta:
        verbose_name = "Empresa"
        verbose_name_plural = "Empresas"