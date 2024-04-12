from models import db
from models.division import Division
from models.school import School
from models.team import Team
from models.player import Player
from models.coach import Coach
from models.park import Park
from models.field import Field
from models.permit import Permit

from flask_restful import Api, Resource
from flask_migrate import Migrate
from flask import Flask, request
import os

BASE_DIR = os.path.abspath(os.path.dirname(__file__))


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['DATABASE_URI']
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)

@app.route('/')
def home():
    return ''


# TEAMS
# 'GET' and 'POST' all
@app.route('/teams', methods=['GET', 'POST'])
def all_teams():
    if request.method == 'GET':
        teams = Team.query.all()
        return [team.to_dict() for team in teams], 200
    elif request.method == 'POST':
        json_data = request.get_json()

        try:
            new_team = Team(
                name=json_data.get('name'),
                registration=json_data.get('registration')
            )
        except ValueError as e:
            return {'errors': [str(e)]}, 400
        db.session.add(new_team)
        db.session.commit()
        return new_team.to_dict(), 200

# 'GET' by id
@app.route('/teams/<int:id>', methods=['GET'])
def team_by_id(id):
    team = Team.query.filter(Team.id == id).first()
    if not team:
        return {'error': 'team not found'}, 404
    return team.to_dict(), 200


# SCHOOLS
# 'GET' and 'POST' all
@app.route('/schools', methods=['GET', 'POST'])
def all_schools():
    if request.method == 'GET':
        schools = School.query.all()
        return [school.to_dict() for school in schools], 200
    elif request.method == 'POST':
        json_data = request.get_json()

        try:
            new_school = School(
                name=json_data.get('name'),
            )
        except ValueError as e:
            return {'errors': [str(e)]}, 400
        db.session.add(new_school)
        db.session.commit()
        return new_school.to_dict(), 200

# 'GET' by id
@app.route('/schools/<int:id>', methods=['GET'])
def school_by_id(id):
    school = School.query.filter(School.id == id).first()
    if not school:
        return {'error': 'school not found'}, 404
    return school.to_dict(), 200


# DIVISIONS
# 'GET' all
@app.route('/divisions', methods=['GET', 'POST'])
def all_divisions():
    if request.method == 'GET':
        divisions = Division.query.all()
        return [division.to_dict() for division in divisions], 200
    elif request.method == 'POST':
        json_data = request.get_json()

        try:
            new_division = Division(
                name=json_data.get('name'),
            )
        except ValueError as e:
            return {'errors': [str(e)]}, 400
        db.session.add(new_division)
        db.session.commit()
        return new_division.to_dict(), 200

# 'GET' by id
@app.route('/divisions/<int:id>', methods=['GET'])
def division_by_id(id):
    division = Division.query.filter(Division.id == id).first()
    if not division:
        return {'error': 'division not found'}, 404
    return division.to_dict(), 200


# PLAYERS
# 'GET' and 'POST' all
@app.route('/players', methods=['GET', 'POST'])
def all_players():
    if request.method == 'GET':
        players = Player.query.all()
        return [player.to_dict() for player in players], 200
    elif request.method == 'POST':
        json_data = request.get_json()

        try:
            new_player = Player(
                first_name=json_data.get('first_name'),
                last_name=json_data.get('last_name'),
                pronouns=json_data.get('pronouns'),
                usau=json_data.get('usau'),
                email=json_data.get('email'),
                birthday=json_data.get('birthday'),
                grade=json_data.get('grade'),
                is_captain=json_data.get('is_captain')

            )
        except ValueError as e:
            return {'errors': [str(e)]}, 400
        db.session.add(new_player)
        db.session.commit()
        return new_player.to_dict(), 200

# 'GET', 'PATCH', and 'DELETE' by id
@app.route('/players/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
def player_by_id(id):
    player = Player.query.filter(Player.id == id).first()
    if not player:
        return {'error': 'player not found'}, 404

    elif request.method == 'GET':
        return player.to_dict(), 200
    elif request.method == 'PATCH':
        json_data=request.get_json()

        for field in json_data:
            value = json_data[field]
            setattr(player, field, value)
        db.session.add(player)
        db.session.commit()
        return player.to_dict(), 200
    elif request.method == 'DELETE':
        db.session.delete(player)
        db.session.commit()
        return {}, 204


# COACHES
# 'GET' and 'POST' all
@app.route('/coaches', methods=['GET', 'POST'])
def all_coaches():
    if request.method == 'GET':
        coaches = Coach.query.all()
        return [coach.to_dict() for coach in coaches], 200
    elif request.method == 'POST':
        json_data = request.get_json()

        try:
            new_coach = Coach(
                first_name=json_data.get('first_name'),
                last_name=json_data.get('last_name'),
                pronouns=json_data.get('pronouns'),
                usau=json_data.get('usau'),
                team_role=json_data.get('team_role')
            )
        except ValueError as e:
            return {'errors': [str(e)]}, 400
        db.session.add(new_coach)
        db.session.commit()
        return new_coach.to_dict(), 200

# 'GET', 'PATCH', and 'DELETE' by id
@app.route('/coaches/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
def coach_by_id(id):
    coach = Coach.query.filter(Coach.id == id).first()
    if not coach:
        return {'error': 'coach not found'}, 404

    elif request.method == 'GET':
        return coach.to_dict(), 200
    elif request.method == 'PATCH':
        json_data=request.get_json()

        for field in json_data:
            value = json_data[field]
            setattr(coach, field, value)
        db.session.add(coach)
        db.session.commit()
        return coach.to_dict(), 200
    elif request.method == 'DELETE':
        db.session.delete(coach)
        db.session.commit()
        return {}, 204


