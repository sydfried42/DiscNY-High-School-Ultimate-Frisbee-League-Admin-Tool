"""initialize database

Revision ID: 01a00debf841
Revises: 
Create Date: 2024-04-05 12:21:17.406776

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '01a00debf841'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('divisions',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id', name=op.f('pk_divisions'))
    )
    op.create_table('schools',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id', name=op.f('pk_schools'))
    )
    op.create_table('teams',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=True),
    sa.Column('registration', sa.Boolean(), nullable=True),
    sa.Column('school_id', sa.Integer(), nullable=True),
    sa.Column('division_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['division_id'], ['divisions.id'], name=op.f('fk_teams_division_id_divisions')),
    sa.ForeignKeyConstraint(['school_id'], ['schools.id'], name=op.f('fk_teams_school_id_schools')),
    sa.PrimaryKeyConstraint('id', name=op.f('pk_teams'))
    )
    op.create_table('coaches',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(), nullable=True),
    sa.Column('last_name', sa.String(), nullable=True),
    sa.Column('pronouns', sa.String(), nullable=True),
    sa.Column('usau', sa.Integer(), nullable=True),
    sa.Column('team_role', sa.String(), nullable=True),
    sa.Column('team_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['team_id'], ['teams.id'], name=op.f('fk_coaches_team_id_teams')),
    sa.PrimaryKeyConstraint('id', name=op.f('pk_coaches'))
    )
    op.create_table('players',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(), nullable=True),
    sa.Column('last_name', sa.String(), nullable=True),
    sa.Column('pronouns', sa.String(), nullable=True),
    sa.Column('usau', sa.Integer(), nullable=True),
    sa.Column('email', sa.String(), nullable=True),
    sa.Column('birthday', sa.Date(), nullable=True),
    sa.Column('grade', sa.String(), nullable=True),
    sa.Column('team_role', sa.String(), nullable=True),
    sa.Column('team_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['team_id'], ['teams.id'], name=op.f('fk_players_team_id_teams')),
    sa.PrimaryKeyConstraint('id', name=op.f('pk_players'))
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('players')
    op.drop_table('coaches')
    op.drop_table('teams')
    op.drop_table('schools')
    op.drop_table('divisions')
    # ### end Alembic commands ###
