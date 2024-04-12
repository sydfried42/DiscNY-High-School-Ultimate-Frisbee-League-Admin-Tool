from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from models import db


class Park(db.Model, SerializerMixin):
    __tablename__ = 'parks'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    borough = db.Column(db.String) 

    # relationships
    fields = db.relationship('Field', back_populates = 'park')

    # serialize rules
    serialize_rules = ['-fields.park']

    # validation: must be Manhattan, Brooklyn, Bronx, Randall's, Queens
    @validates('borough')
    def validates_borough(self, key, new_borough):
        borough_list = ["Manhattan", "Brooklyn", "Bronx", "Randall's", "Queens"]
        if new_borough not in borough_list:
            raise ValueError(f'not valid {key}')
        else:
            return new_borough