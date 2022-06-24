package dev.kukim.issues.config;

import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateSerializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;
import dev.kukim.issues.user.auth.controller.LoginInterceptor;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@RequiredArgsConstructor
public class WebMvcConfig implements WebMvcConfigurer {

	private final LoginInterceptor loginInterceptor;

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**")
			.allowedOrigins("http://localhost:3000", "https://d197fs5q8pj3rm.cloudfront.net")
			.allowedMethods("*");
	}

	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(loginInterceptor)
			.addPathPatterns("/issues/**")
			.addPathPatterns("/error/**");
	}

	// reference : https://kwonnam.pe.kr/wiki/springframework/springboot/json
	@Override
	public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
		WebMvcConfigurer.super.configureMessageConverters(converters);
		converters.add(new MappingJackson2HttpMessageConverter(jackson2ObjectMapperBuilder().build()));
	}

	@Bean
	public Jackson2ObjectMapperBuilder jackson2ObjectMapperBuilder() {
		return new Jackson2ObjectMapperBuilder()
			.failOnUnknownProperties(false) // SpringBoot default
			.featuresToDisable(MapperFeature.DEFAULT_VIEW_INCLUSION) // SpringBoot default
			.featuresToEnable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS) // SpringBoot default
			.serializerByType(LocalDateTime.class, new LocalDateTimeSerializer(DateTimeFormatter.ISO_LOCAL_DATE_TIME))
			.serializerByType(LocalDate.class, new LocalDateSerializer(DateTimeFormatter.ISO_DATE));
	}
}
