from sqlalchemy_serializer import SerializerMixin
from models import db

class Park(db.Model):
    __tablename__ = 'parks'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    borough = db.Column(db.String) 

    # relationships
    fields = db.relationship('Field', back_populates = 'park')

    # serialize rules
    serialize_rules = ['-park.fields']

    # validation: must be Manhattan, Brooklyn, Bronx, Randall's, Queens
    @validates('borough')
    def validates_borough(self, key, new_borough):
        borough_list = ["Manhattan", "Brooklyn", "Bronx", "Randall's", "Queens"]
        if new_borough not in borough_list:
            raise ValueError('not valid {key}')
        else:
            return new_borough