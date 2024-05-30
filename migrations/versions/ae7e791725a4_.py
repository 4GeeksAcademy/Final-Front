"""empty message

Revision ID: ae7e791725a4
Revises: 67eb4edcccf1
Create Date: 2024-05-30 21:35:04.274127

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ae7e791725a4'
down_revision = '67eb4edcccf1'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('orders', schema=None) as batch_op:
        batch_op.add_column(sa.Column('course_id', sa.Integer(), nullable=True))
        batch_op.add_column(sa.Column('teacher_id', sa.Integer(), nullable=True))
        batch_op.create_foreign_key(None, 'teacher', ['teacher_id'], ['id'])
        batch_op.create_foreign_key(None, 'course', ['course_id'], ['id'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('orders', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.drop_column('teacher_id')
        batch_op.drop_column('course_id')

    # ### end Alembic commands ###
