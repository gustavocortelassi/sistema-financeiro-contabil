from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    permissions = serializers.SerializerMethodField()

    class Meta:
        model = User
        # campos que ira retornar
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'permissions']

    def get_permissions(self, obj):
        """
        Retorna uma lista de strings de permissão do usuário 
        (ex: "app_label.codename")
        """
        return obj.get_all_permissions()