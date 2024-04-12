from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from models import db

class Field(db.Model, SerializerMixin):
    __tablename__ = 'fields'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    size = db.Column(db.String)

    # foreign key
    park_id = db.Column(db.Integer, db.ForeignKey('parks.id'))

    # relationships
    permits = db.relationship('Permit', back_populates = 'field')
    park = db.relationship('Park', back_populates = 'fields')

    # serialize rules
    serialize_rules = ['-permits.field', '-parks.field']

    # validations
    @validates('size')
    def validates_size(self, key, new_size):
        if new_size in ["M", "L"]:
            return new_size
        else:
            raise ValueError (f'not valid {key}')