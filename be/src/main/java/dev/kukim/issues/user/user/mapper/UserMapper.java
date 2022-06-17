package dev.kukim.issues.user.user.mapper;

import dev.kukim.issues.user.auth.controller.response.GithubUserResponse;
import dev.kukim.issues.user.user.domain.User;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface UserMapper {

	UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

	User map(GithubUserResponse githubUserResponse);
}
