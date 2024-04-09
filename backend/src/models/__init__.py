"""
To create db:

flask db init  # creates the migration folder (only need to run this once)
flask db migrate -m 'some message'  # creates the revision file
flask db upgrade  # apply db changes from revision file
"""


from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData



convention = {
    "ix": "ix_%(column_0_label)s",
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(constraint_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "pk": "pk_%(table_name)s"
}

db = SQLAlchemy(metadata=MetaData(naming_convention=convention))