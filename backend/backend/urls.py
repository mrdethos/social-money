from django.contrib import admin
from django.urls import path, re_path
from users import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/users/', views.users_list),
    path('api/users/<pk>', views.users_detail),
]
