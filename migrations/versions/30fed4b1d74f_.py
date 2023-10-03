"""empty message

Revision ID: 30fed4b1d74f
Revises: 18ca452daaa5
Create Date: 2023-10-03 18:52:37.581106

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '30fed4b1d74f'
down_revision = '18ca452daaa5'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.alter_column('profileimg',
               existing_type=sa.VARCHAR(length=64),
               type_=sa.String(length=400),
               existing_nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.alter_column('profileimg',
               existing_type=sa.String(length=400),
               type_=sa.VARCHAR(length=64),
               existing_nullable=False)

    # ### end Alembic commands ###
