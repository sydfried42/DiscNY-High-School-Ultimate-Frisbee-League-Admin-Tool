from sqlalchemy_serializer import SerializerMixin
from models import db

class School(db.Model):
    __tablename__ = 'schools'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)

    # relationships
    teams = db.relationship('Team', back_populates = 'school')

    # serialize rules
    serialize_rules = ['-teams.school']

    # validations

    def __repr__(self):
        return f"<School {self.name} >"