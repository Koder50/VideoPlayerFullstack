package com.example.springbootvideoplayers.videoplayers.videoPlayer.controller;

import com.example.springbootvideoplayers.videoplayers.videoPlayer.dto.VideoPlayerDto;
import com.example.springbootvideoplayers.videoplayers.videoPlayer.entity.VideoPlayerEntity;
import com.example.springbootvideoplayers.videoplayers.videoPlayer.service.VideoPlayerService;
import com.example.springbootvideoplayers.videoplayers.videoPlayer.service.VideoPlayerService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Slf4j
@CrossOrigin(allowedHeaders = "Content-type")
@AllArgsConstructor
@RestController
@RequestMapping("api/v1/video-players")
@PreAuthorize("isAuthenticated()")
@SecurityRequirement(name = "bearerAuth")
public class VideoPlayerController {
    private final VideoPlayerService service;
    private final ModelMapper mapper;
    // LOGGER FROM SLF4j
    private static final Logger LOGGER = LoggerFactory.getLogger(com.example.springbootvideoplayers.videoplayers.videoPlayer.controller.VideoPlayerController.class);

    // LOGGER FROM LOMBOK SLF4j
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping
    public List<VideoPlayerDto> getVideoPlayers(Pageable pageable) {
        int toSkip = pageable.getPageSize() * pageable.getPageNumber();
        //SLF4J
        LOGGER.info("Using SLF4J: Getting video-player list - getVideoPlayers()");
        //LOMBOK SLF4j
        log.info("Using SLF4J Lombok: Getting video player list - getVideoPlayers()");
        // Mapstruct is another dto mapper, but it's not straight forward
        var videoPlayerList = StreamSupport
                .stream(service.findAllVideoPlayers().spliterator(), false)
                .skip(toSkip).limit(pageable.getPageSize())
                .collect(Collectors.toList());

        return videoPlayerList
                .stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public VideoPlayerDto getVideoPlayerById(@PathVariable("id") UUID id) {
        return convertToDto(service.findVideoPlayerById(id));
    }

    @DeleteMapping("/{id}")
    public void deleteVideoPlayerById(@PathVariable("id") UUID id) {
        service.removeVideoPlayerById(id);
    }

    @PostMapping
    public VideoPlayerDto postVideoPlayer(@Valid @RequestBody VideoPlayerDto videoPlayerDto) {
        var entity = convertToEntity(videoPlayerDto);
        var videoPlayer = service.addVideoPlayer(entity);

        return convertToDto(videoPlayer);
    }

    @PutMapping("/{id}")
    public void putVideoPlayer(
            @PathVariable("id") UUID id,
            @Valid @RequestBody VideoPlayerDto videoPlayerDto
    ) {
        if (!id.equals(videoPlayerDto.getId())) throw new ResponseStatusException(
                HttpStatus.BAD_REQUEST,
                "id does not match"
        );

        var videoPlayerEntity = convertToEntity(videoPlayerDto);
        service.updateVideoPlayer(id, videoPlayerEntity);
    }

    private VideoPlayerDto convertToDto(VideoPlayerEntity entity) {
        return mapper.map(entity, VideoPlayerDto.class);
    }

    private VideoPlayerEntity convertToEntity(VideoPlayerDto dto) {
        return mapper.map(dto, VideoPlayerEntity.class);
    }

}
