from sqlalchemy_serializer import SerializerMixin
from models import db

class Permit(db.Model):
    __tablename__ = 'permits'

    id = db.Column(db.Integer, primary_key=True)
    code = db.Column(db.Integer)
    date = db.Column(db.DateTime, nullable=False)

    # foriegn key
    team_id = db.Column(db.Integer, db.ForeignKey('teams.id'))
    field_id = db.Column(db.Integer, db.ForeignKey('fields.id'))

    # relationships
    teams = db.relationship('Team', back_populates = 'permits')
    field = db.relationship('Field', back_populates = 'permits')

    # serialize rules
    serialize_rules = ['-permits.team']
    serialize_rules = ['-permits.field']

    # validations