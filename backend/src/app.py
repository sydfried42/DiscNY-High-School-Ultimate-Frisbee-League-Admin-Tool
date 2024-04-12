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



# SCHOOLS
# 'GET' and 'POST' all

# 'GET' by id


# DIVISIONS
# 'GET' all

# 'GET' by id


# PLAYERS
# 'GET' and 'POST' all

# 'GET', 'PATCH', and 'DELETE' by id


# COACHES
# 'GET' and 'POST' all

# 'GET', 'PATCH', and 'DELETE' by id



