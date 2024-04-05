from sqlalchemy_serializer import SerializerMixin
from models import db

class Division(db.Model):
    __tablename__ = 'divisions'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)

    # relationships
    teams = db.relationship('Team', back_populates = 'division')

    # serialize rules
    serialize_rules = ['-teams.division']

    # validations

    def __repr__(self):
        return f"<Division {self.name} >"