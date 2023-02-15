from django.contrib import admin
from django.urls import path, re_path
from django.views.generic import TemplateView
from users import views

urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html')),
    path('admin/', admin.site.urls),
    path('api/users/', views.users_list),
    path('api/users/<pk>', views.users_detail),
]
