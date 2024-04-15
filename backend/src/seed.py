from random import randint, choice as rc

from faker import Faker

from app import app
from models import db
from models.school import School
from models.team import Team
from models.player import Player
from models.coach import Coach


fake = Faker()


def create_school():
    schools = []
    for _ in range(20):
        s = School(
            name=fake.first_name(),
        )
        schools.append(s)

    return schools


def create_team():
    teams = []
    for _ in range(20):
        t = Team(
            name=fake.first_name()
        )
        teams.append(t)

    return teams


def create_player(teams):
    players = []
    for _ in range(20):
        p = Player(
            first_name=fake.first_name(),
            last_name=fake.last_name(),
            
            team_id=rc(teams).id,
        )
        players.append(p)

    return players

def create_coach(planets, scientists):
    missions = []
    for _ in range(20):
        m = Mission(
            name=fake.sentence(nb_words=3),
            planet_id=rc(planets).id,
            scientist_id=rc(scientists).id
        )
        missions.append(m)
    return missions


if __name__ == '__main__':

    with app.app_context():
        print("Clearing db...")
        Planet.query.delete()
        Scientist.query.delete()
        Mission.query.delete()

        print("Seeding planets...")
        planets = create_planets()
        db.session.add_all(planets)
        db.session.commit()

        print("Seeding scientists...")
        scientists = create_scientists()
        db.session.add_all(scientists)
        db.session.commit()

        print("Seeding missions...")
        missions = create_missions(planets, scientists)
        db.session.add_all(missions)
        db.session.commit()

        print("Done seeding!")