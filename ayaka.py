import discord
import os
from discord.ext import commands
import random

my_secret = os.environ['token']

# prefix
bot = commands.Bot(command_prefix='ay')

@bot.command()
async def ping(ctx):
  await ctx.send("pong")
  
# math commands
@bot.command()
async def add(ctx, left: int, right: int):
  await ctx.send(left + right)

@bot.command()
async def multiply(ctx, left: int, right: int):
  await ctx.send(left * right)

@bot.command()
async def divide(ctx, left: int, right: int):
  await ctx.send(left / right)

@bot.command()
async def subtract(ctx, left: int, right: int):
  await ctx.send(left - right)

@bot.command()
async def power(ctx, left: int, right: int):
  await ctx.send(left ** right)

# choose
@bot.command()
async def choose(ctx, *, args):
  choose_list = args.split('|')
  await ctx.send(random.choice(choose_list))

# roll
@bot.command()
async def roll(ctx, limit: int):
  result = random.randint(1, limit)
  await ctx.send(result)

# run
bot.run(my_secret)