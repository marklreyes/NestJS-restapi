import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get() // GET /users or /users?role=value
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    // This action returns all users
    return [];
  }

  @Get(':id') // GET /users/:id
  findOne(@Param('id') id: string) {
    // This action returns a #${id} user
    return { id };
  }
  // be mindful of defining a route after the findOne route as it will be treated as a param
  // e.g. @Get(':id') will be treated as a param if defined after @Get('profile')

  @Post() // POST /users
  create(@Body() user: {}) {
    return user;
  }

  @Patch(':id') // PATCH /users/:id
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }

  @Delete(':id') // DELETE /users/:id
  delete(@Param('id') id: string) {
    // This action returns a #${id} user
    return { id };
  }
}
