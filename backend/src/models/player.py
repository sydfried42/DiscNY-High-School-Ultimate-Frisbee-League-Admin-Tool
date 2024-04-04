from sqlalchemy_serializer import SerializerMixin
from models import db

class Player(db.Model):
    __tablename__ = 'players'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    pronouns = db.Column(db.String)
    usau = db.Column(db.Integer)
    email = db.Column(db.String)
    birthday = db.Column(db.Date)
    grade = db.Column(db.String)
    team_role = db.Column(db.String)

    #foriegn key
    team_id = db.Column(db.Integer, db.ForeignKey('teams.id'))

    # relationships
    team = db.relationship('Team', back_populates = 'players')

    # serialize rules
    serialize_rules = ['-team.players']


    def __repr__(self):
        return f"<Player {self.first_name} {self.last_name} >"
