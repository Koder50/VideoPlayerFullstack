package com.example.springbootvideoplayers.videoplayers.videoPlayer.service;

import java.util.UUID;

import com.example.springbootvideoplayers.videoplayers.videoPlayer.entity.VideoPlayerEntity;
import com.example.springbootvideoplayers.videoplayers.exception.NotFoundException;
import com.example.springbootvideoplayers.videoplayers.videoPlayer.repository.VideoPlayerRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class VideoPlayerService {

    private final VideoPlayerRepository repo;

    public Iterable<VideoPlayerEntity> findAllVideoPlayers() {
        return repo.findAll();
    }

    public VideoPlayerEntity findVideoPlayerById(UUID id) {
        return findOrThrow(id);
    }

    public void removeVideoPlayerById(UUID id) {
        repo.deleteById(id);
    }

    public VideoPlayerEntity addVideoPlayer(VideoPlayerEntity videoPlayer) {
        return repo.save(videoPlayer);
    }

    public void updateVideoPlayer(UUID id, VideoPlayerEntity videoPlayer) {
        findOrThrow(id);
        repo.save(videoPlayer);
    }

    private VideoPlayerEntity findOrThrow(final UUID id) {
        return repo
                .findById(id)
                .orElseThrow(
                        () -> new NotFoundException("Video-player by id " + id + " was not found")
                );
    }
}

