# for random and fake information
from random import randint, choice as rc
from faker import Faker

# I need my boxes and my room.
from app import app
from models import db

# I need my specific order type. 
from models.division import Division
from models.school import School
from models.team import Team
from models.player import Player
from models.coach import Coach

fake = Faker()

# I need functions to effectively "pack" boxes to ship to the room.
def create_sample_divisions():
    divisions = [
        Division(name='Club Girls/Non-Binary'),
        Division(name='Club Open A'),
        Division(name='Club Open B'),
        Division(name='Interscholastic Open')
    ]
    return divisions

def create_sample_schools():
    schools = [
        School(name='Avenues the World School'),
        School(name='Bard Early College High School'),
        School(name='Baruch College Campus High School'),
        School(name='Beacon'),
        School(name='Berkeley Carroll'),
        School(name='Bronx High School of Science'),
        School(name='Brooklyn Latin'),
        School(name='Brooklyn Technical High School'),
        School(name='Columbia Secondary School'),
        School(name='Edward R. Murrow High School'),
        School(name='Fieldston'),
        School(name='Followers of Jesus School'),
        School(name='Fordham Preparatory School'),
        School(name='Heschel'),
        School(name='Horace Mann'),
        School(name='HSMSE'),
        School(name='Hunter College High School'),
        School(name='MCSM'),
        School(name='Packer Collegiate'),
        School(name='Ramaz'),
        School(name='Regis High School'),
        School(name='Riverdale Country School'),
        School(name='SAR High School'),
        School(name='Schechter'),
        School(name='Stuyvesant'),
        School(name='The Geneva School of Manhattan')
    ]
    return schools

def create_sample_teams():
    teams = [
        Team(name='Followers of Jesus', registration=False, school_id=12, division_id=3),
        Team(name='(B)eagles', registration=False, school_id=11, division_id=3),
        Team(name='Aviators', registration=False, school_id=1, division_id=4),
        Team(name='(Sh)eagles', registration=False, school_id=11, division_id=1),
        Team(name='Bardbarians', registration=False, school_id=2, division_id=2),
        Team(name='Blue Demons (Bx)', registration=False, school_id=4, division_id=2), 
        Team(name='Blue Demons (Gx)', registration=False, school_id=4, division_id=1),
        Team(name='Blue Devils', registration=False, school_id=3, division_id=3),
        Team(name='Disco Tech', registration=False, school_id=8, division_id=1),
        Team(name='Dragons', registration=False, school_id=16, division_id=3),
        Team(name='Eagles', registration=False, school_id=11, division_id=2),
        Team(name='Falcons', registration=False, school_id=22, division_id=4),
        Team(name='Halcyons', registration=False, school_id=17, division_id=3),   
        Team(name='Heat', registration=False, school_id=14, division_id=2),
        Team(name='Knights', registration=False, school_id=26, division_id=3),
        Team(name='Lions', registration=False, school_id=9, division_id=3),
        Team(name='Lions', registration=False, school_id=5, division_id=4),
        Team(name='Lions', registration=False, school_id=15, division_id=4),
        Team(name='Lions', registration=False, school_id=24, division_id=4),
        Team(name='Lone Wolves', registration=False, school_id=6, division_id=2),
        Team(name='Magic', registration=False, school_id=10, division_id=3),
        Team(name='Owls', registration=False, school_id=21, division_id=4),
        Team(name='Pelicans', registration=False, school_id=18, division_id=3),
        Team(name='Rams', registration=False, school_id=20, division_id=3),
        Team(name='Rams', registration=False, school_id=13, division_id=4),
        Team(name='Sticky Fingers (Bx)', registration=False, school_id=25, division_id=2),
        Team(name='Sticky Fingers (Gx)', registration=False, school_id=25, division_id=1),
        Team(name='Sting', registration=False, school_id=23, division_id=4),
        Team(name='Tech Support', registration=False, school_id=8, division_id=2),
        Team(name='Tech Support (B)', registration=False, school_id=8, division_id=3),
        Team(name='Titans (Bx)', registration=False, school_id=7, division_id=2),
        Team(name='Ultimaidens', registration=False, school_id=2, division_id=1)
    ]
    return teams

def create_sample_player(teams):
    players = []
    for _ in range(30):
        p = Player(
                first_name=fake.first_name(),
                last_name=fake.last_name(),
                pronouns=fake.word(),
                usau=randint(10000, 50000),
                jersey_number=randint(0, 100),
                email=fake.email(),
                birthday=fake.date_of_birth(minimum_age=15, maximum_age=18),
                grade=randint(9, 12),
                is_captain=bool(randint(0, 1)),
                team_id=rc(teams).id
            )
        players.append(p)

    return players

def create_sample_coach(teams):
    coaches = []
    for _ in range(2):
        c = Coach(
                first_name=fake.first_name(),
                last_name=fake.last_name(),
                pronouns=fake.word(),
                usau=randint(10000, 50000),
                team_role=fake.word(),
                email=fake.email(),
                team_id=rc(teams).id
            )
        coaches.append(c)

    return coaches

# I need the door to the room to be open to throw shit inside of it.
with app.app_context():
  # delete all tables
    print('deleting all data...')
    Division.query.delete()
    School.query.delete()
    Team.query.delete()
    Player.query.delete()
    Coach.query.delete()
    
    db.session.commit()

    # Store our package inside the room.
    print('adding divisions...')
    divisions = create_sample_divisions()
    db.session.add_all(divisions)
    print("adding schools...")
    schools = create_sample_schools()
    db.session.add_all(schools)
    print('adding teams...')
    teams = create_sample_teams()
    db.session.add_all(teams)
    print('adding players...')
    players = create_sample_player(teams)
    db.session.add_all(players)
    print('adding coaches...')
    coaches = create_sample_coach(teams)
    db.session.add_all(coaches)
    
    db.session.commit()
