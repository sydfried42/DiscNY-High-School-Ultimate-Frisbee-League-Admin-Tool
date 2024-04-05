from sqlalchemy_serializer import SerializerMixin
from models import db

class Field(db.Model):
    __tablename__ = 'fields'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    size = db.Column(db.String)

    # foriegn key
    park_id = db.Column(db.Integer, db.ForeignKey('parks.id'))

    # relationships
    permits = db.relationship('Permit', back_populates = 'field')
    parks = db.relationship('Park', back_populates = 'field')

    # serialize rules
    serialize_rules = ['-field.permits']
    serialize_rules = ['-field.parks']

    # validations
    @validates('size')
    def validates_size(self, key, new_size):
        if new_size == "M" or "L":
            return new_size
        else:
            raise ValueError ('not valid {key}')