from django.urls import path
from . import views
urlpatterns=[
path('',views.IndexView.as_view(),name='index'),
path('<pk>',views.DetailView.as_view(),name='detail'),
path('album/add',views.AlbumCreate.as_view(),name='album-add'),
path(r'album/(?P<pk>[0-9]+)/$',views.AlbumUpdate.as_view(),name='album-update'),

path(r'album/(?P<pk>[0-9]+)/delete/$',views.AlbumDelete.as_view(),name='album-delete')


]
