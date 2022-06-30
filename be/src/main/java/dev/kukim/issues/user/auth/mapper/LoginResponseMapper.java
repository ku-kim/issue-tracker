package dev.kukim.issues.user.auth.mapper;

import dev.kukim.issues.user.auth.controller.response.LoginResponse;
import dev.kukim.issues.user.user.domain.User;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface LoginResponseMapper {

	LoginResponseMapper INSTANCE = Mappers.getMapper(LoginResponseMapper.class);

	LoginResponse map(User user, String accessToken);
}
