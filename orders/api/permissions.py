from rest_framework import permissions


class IsBuyerOfOrder(permissions.BasePermission):
    def has_object_permission(self, request, view, order):
        if request.user:
            return order.buyer == request.user
            # return content.id == request.user.id
        return False