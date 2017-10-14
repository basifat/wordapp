from django.conf.urls import patterns, url,include
from rest_framework_nested import routers
from django.contrib import admin

from wdp.views import IndexView
from authentication.api.views import AccountViewSet, LoginView, LogoutView


router = routers.SimpleRouter()
router.register(r'accounts', AccountViewSet)

accounts_router = routers.NestedSimpleRouter(
    router, r'accounts', lookup='account'
)



urlpatterns = patterns(
    '',
    #url(r'^$', IndexView.as_view(), name='index'),
    url(r'^admin/', admin.site.urls),
    url(r'^api/v1/', include(router.urls)),
    url(r'^api/v1/', include(accounts_router.urls)),

    )