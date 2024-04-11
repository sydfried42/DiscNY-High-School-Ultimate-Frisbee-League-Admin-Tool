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
from flask import Flask
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



