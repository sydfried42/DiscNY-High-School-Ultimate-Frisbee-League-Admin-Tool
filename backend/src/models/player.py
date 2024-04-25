from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from models import db

class Player(db.Model, SerializerMixin):
    __tablename__ = 'players'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    pronouns = db.Column(db.String)
    usau = db.Column(db.Integer, unique=True)
    email = db.Column(db.String)
    birthday = db.Column(db.String)
    grade = db.Column(db.String)
    is_captain = db.Column(db.Boolean)

    #foreign key
    team_id = db.Column(db.Integer, db.ForeignKey('teams.id'))

    # relationships
    team = db.relationship('Team', back_populates = 'players')

    # serialize rules
    serialize_rules = ['-team.players']

    # validations
    @validates('email')
    def validate_email(self, key, address):
        if '@' not in address:
            raise ValueError("enter valid email")
        return address


    def __repr__(self):
        return f"<Player {self.first_name} {self.last_name} >"
