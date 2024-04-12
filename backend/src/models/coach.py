from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from models import db

class Coach(db.Model, SerializerMixin):
    __tablename__ = 'coaches'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    pronouns = db.Column(db.String)
    usau = db.Column(db.Integer, unique=True)
    team_role = db.Column(db.String)

    #foreign key
    team_id = db.Column(db.Integer, db.ForeignKey('teams.id'))

    # relationships
    team = db.relationship('Team', back_populates = 'coaches')

    # serialize rules
    serialize_rules = ['-team.coaches']

    # validations


    def __repr__(self):
        return f"<Coach {self.first_name} {self.last_name} >"