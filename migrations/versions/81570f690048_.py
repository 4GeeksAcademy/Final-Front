"""empty message

Revision ID: 81570f690048
Revises: c08a028b6202
Create Date: 2024-03-03 23:08:00.614590

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '81570f690048'
down_revision = 'c08a028b6202'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.alter_column('location',
               existing_type=sa.VARCHAR(length=50),
               type_=sa.String(length=100),
               existing_nullable=False)
        batch_op.drop_column('is_active')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('is_active', sa.BOOLEAN(), autoincrement=False, nullable=False))
        batch_op.alter_column('location',
               existing_type=sa.String(length=100),
               type_=sa.VARCHAR(length=50),
               existing_nullable=False)

    # ### end Alembic commands ###
